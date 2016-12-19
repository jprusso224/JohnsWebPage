var BODY_DIV_ONE, BODY_DIV_START, MAX_BODY_DIVS, OFFSCREEN_LEFT_POS, OFFSCREEN_RIGHT_POS, ONSCREEN_ZERO_POS;

BODY_DIV_ONE = 1;

BODY_DIV_START = 1;

MAX_BODY_DIVS = 5;

ONSCREEN_ZERO_POS = "0%";

OFFSCREEN_LEFT_POS = "-150%";

OFFSCREEN_RIGHT_POS = "150%";

$(document).ready(function() {
  var currId, i, incrememtIdAttr, index, position_left, ref, ref1;
  currId = BODY_DIV_START;
  for (index = i = ref = BODY_DIV_ONE, ref1 = MAX_BODY_DIVS; ref <= ref1 ? i <= ref1 : i >= ref1; index = ref <= ref1 ? ++i : --i) {
    if (index === BODY_DIV_START) {
      position_left = ONSCREEN_ZERO_POS;
    } else if (index < BODY_DIV_START) {
      position_left = OFFSCREEN_LEFT_POS;
    } else {
      position_left = OFFSCREEN_RIGHT_POS;
    }
    $('.body-box[id =' + index + ']').css("left", position_left);
  }
  incrememtIdAttr = function(id_in) {
    var id_out;
    id_out = Number(id_in) + 1;
    if (id_out > MAX_BODY_DIVS) {
      id_out = BODY_DIV_ONE;
    }
    return id_out.toString();
  };
  return $('.nav-item').click(function() {
    var from_pos_left, idAttr;
    idAttr = $(this).attr("id");
    from_pos_left = ONSCREEN_ZERO_POS;
    if (Number(idAttr) > currId) {
      $('.body-box[id =' + currId + ']').animate({
        left: OFFSCREEN_LEFT_POS
      }, {
        duration: 'slow',
        queue: false
      }, from_pos_left = OFFSCREEN_RIGHT_POS);
    } else if (Number(idAttr) < currId) {
      $('.body-box[id =' + currId + ']').animate({
        left: OFFSCREEN_RIGHT_POS
      }, {
        duration: 'slow',
        queue: false
      }, from_pos_left = OFFSCREEN_LEFT_POS);
    }
    $('.body-box[id =' + idAttr + ']').css("left", from_pos_left);
    $('.body-box[id =' + idAttr + ']').animate({
      left: "0%"
    }, {
      duration: 'slow',
      queue: false
    });
    return currId = Number(idAttr);
  });
});
