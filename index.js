/*
 * @Description: Description
 * @Author: HuTao
 * @Date: 2019-08-12 22:54:56
 * @LastEditTime: 2019-08-13 00:02:16
 */
function handleClick() {
  var ele = document.querySelector(".ht-expandedPart");
  var eleHeight = ele.getBoundingClientRect().height;
  if (eleHeight) {
    // 收起
    ele.style.height = `${eleHeight}px`;
    ele.offsetHeight;
    ele.style.height = "0px";
  } else {
    // 展开
    ele.style.height = "auto";
    var H = ele.getBoundingClientRect().height;
    ele.style.height = "0";
    ele.offsetHeight;
    ele.style.height = `${H}px`;
  }
}
