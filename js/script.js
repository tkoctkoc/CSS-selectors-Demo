/*!
 *  - v1.0.0 ()
 * Copyright 2013-2017 CSS-selectors-Demo - 
 */
!function(){var a=$("#selectors"),s=$("#example");a.delegate("dd","click",function(){var t=$(this);a.find("dd").removeClass("n"),t.addClass("n"),t.data("val")?s.attr("class","ex_"+t.data("val")):s.attr("class","")})}();