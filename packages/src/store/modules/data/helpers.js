/**
 *
 * @param {Array} arr 过滤数组
 */
export function filterDictionaryStatus(arr) {
  return arr.filter((item) => {
    if (item.children?.length > 0) {
      item.children = filterDictionaryStatus(item.children)
    }
    return item.status !== 0
  })
}
