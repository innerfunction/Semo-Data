$(function(){
  $('#demo1').sharrre({
    share: {
      googlePlus: true,
      facebook: true,
      twitter: true,
      delicious: true
    },
    buttons: {
      googlePlus: {size: 'tall'},
      facebook: {layout: 'box_count'},
      twitter: {count: 'vertical'},
      delicious: {size: 'tall'}
    },
    hover: function(api, options){
      $(api.element).find('.buttons').show();      
    },
    hide: function(api, options){
      $(api.element).find('.buttons').hide();
    }
  });
  
  $('#demo2').sharrre({
    share: {
      googlePlus: true,
      facebook: true,
      twitter: true
    },
    url: 'http://sharrre.com',
    enableHover: false
  });
});
