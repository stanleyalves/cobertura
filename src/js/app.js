$(document).ready(function() {

  $('.button-new-content').click(function() {
    $('html, body').animate({
      scrollTop: $('main').offset().top
    }, 800);
    $(this).fadeOut().addClass('is-hidden');
    return false;
  });

  var timeLineStore = window.TimeLineStore;
  var timelineBlocks = window.TimelineBlocks;
  var CONFIG = window.CONFIG;

  timelineBlocks.hideBlocksOutsideViewport(CONFIG.OFFSET);

  function addImageInHightlightsContent(element) {
    if (element.type === 'photo') {
      $('.choose-photos').html(
        $('.choose-photos').html() +
        '<a class="photo" href="' + getOptmizedImageUrl(element.url) + '">' +
          '<img class="highlight-photo" src="' + getOptmizedImageUrl(element.url) + '" alt="' + element.content + '" width="90" height="auto">' +
        '</a>');
    }
  }

  function addTimelineBlockInDOM(localData) {
    $.each(localData, function(item, element){

      timelineBlocks.render(element, false);
      addImageInHightlightsContent(element);
      timeLineStore.remove(element);
    });
  }

  var scrollEventToLargeScreen =  function(){
    var containsSomegallery = false;
    var $lastTimelineItem = $('.timeline-block:last-child');
    var lastElementIsVisible = ($lastTimelineItem.size() > 0) ?
      timelineBlocks.elementIsVisibleOnViewport($lastTimelineItem, CONFIG.OFFSET) :
      true;

    timelineBlocks.showBlocksInViewport(CONFIG.OFFSET);
    if (!lastElementIsVisible) {
      return;
    }

    var localData = timeLineStore.getLocalOldestInformations();

    if (localData.length === 0) {
      return;
    }

    addTimelineBlockInDOM(localData);

    timelineBlocks.hideBlocksOutsideViewport(CONFIG.OFFSET);
  };

  var clickEventToMobileScreen = function(element){
    var $self = $(element);
    $self.addClass('m-progress');

    timelineBlocks.showBlocksInViewport(CONFIG.OFFSET);

    var localData = timeLineStore.getLocalOldestInformations();

    if (localData.length === 0) {
      $self.attr('disabled', true).removeClass('m-progress');
      return;
    }

    addTimelineBlockInDOM(localData);

    $self.removeClass('m-progress');
  };


  timeLineStore.getBufferInformations(CONFIG.URL_BUFFER_INFO).then(function(items){

    timeLineStore.setData(items);

    items = timeLineStore.getLocalOldestInformations();

    if (items.length > 0) {
      addTimelineBlockInDOM(items);
    }

    items = null;

    var socket = io.connect(CONFIG.URL_SOCKET_IO);
    socket.on('burburinho', function (data) {

      timeLineStore.remove(data.message);

      timelineBlocks.showBlocksInViewport(CONFIG.OFFSET);
      timelineBlocks.render(data.message, true);
      addImageInHightlightsContent(data.message);

      timelineBlocks.hideBlocksOutsideViewport(CONFIG.OFFSET);
    });

    if (!window.UA.isMobile()) {
      $('.button-load-more').remove();
      $(window).on('scroll', scrollEventToLargeScreen);
    } else {
      $('.button-load-more').click( clickEventToMobileScreen );
    }
  });

});
