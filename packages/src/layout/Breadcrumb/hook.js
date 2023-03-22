export default function () {
  function getBreadcrumbPath(list, path) {
    let breadPathArr = []
    for (let key in list) {
      if (list[key].url === path) {
        breadPathArr.push(list[key])
        break
      } else if (list[key].children) {
        const itemArr = getBreadcrumbPath(list[key].children, path)
        if (itemArr && itemArr.length) {
          breadPathArr = [list[key], ...itemArr]
          break
        }
      }
    }
    return breadPathArr
  }
  return {
    getBreadcrumbPath,
  }
}
