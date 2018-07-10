export const addClass = (el, strClass) => {
    const strArray = strClass.replace(/(^ +)|( +$)/g, '').split(/\s+/g)
    let newClass = el.className.replace(/(^ +)|( +$)/g, '').split(/\s+/g)
    strArray.forEach((a) => {
      if (!hasClass(el, a)) {
        newClass = [...newClass, ...[a]]
      }
    })
    el.className = newClass.join(' ')
  }
  export const hasClass = (el, className) => {
    const reg = new RegExp('(^| +)' + className + '(| +$)')
    return reg.test(el.className)
  }