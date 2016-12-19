#constants
BODY_DIV_ONE = 1
BODY_DIV_START = 1
MAX_BODY_DIVS = 5

ONSCREEN_ZERO_POS = "0%"
OFFSCREEN_LEFT_POS = "-150%"
OFFSCREEN_RIGHT_POS = "150%"

$(document).ready ->

    currId = BODY_DIV_START

    #Hide all body divs except the starting div
    for index in [BODY_DIV_ONE..MAX_BODY_DIVS]
        if index is BODY_DIV_START then position_left = ONSCREEN_ZERO_POS
        else if index < BODY_DIV_START then position_left = OFFSCREEN_LEFT_POS
        else position_left = OFFSCREEN_RIGHT_POS
        $('.body-box[id =' + index + ']').css("left", position_left)

    #Helper function to increment class id
    incrememtIdAttr = (id_in)->
        id_out = Number(id_in) + 1
        if id_out > MAX_BODY_DIVS
          id_out = BODY_DIV_ONE
        id_out.toString()

    #When nav item clicked
    $('.nav-item').click ->
        idAttr = $(this).attr("id")
        from_pos_left = ONSCREEN_ZERO_POS

        #If new page id larger than current, move current left
        if Number(idAttr) > currId
        then $('.body-box[id ='+currId+']').animate {left: OFFSCREEN_LEFT_POS},
            duration:'slow', queue: false
            from_pos_left = OFFSCREEN_RIGHT_POS

        #If new page id larger than current, move current left
        else if Number(idAttr) < currId
        then $('.body-box[id ='+currId+']').animate {left: OFFSCREEN_RIGHT_POS},
            duration:'slow', queue: false
            from_pos_left = OFFSCREEN_LEFT_POS

        #Bring the desired page on screen from appropriate location
        $('.body-box[id =' + idAttr + ']').css("left", from_pos_left)
        $('.body-box[id =' + idAttr + ']').animate {left: "0%"},
        duration:'slow', queue: false

        #save current page id
        currId = Number(idAttr)
