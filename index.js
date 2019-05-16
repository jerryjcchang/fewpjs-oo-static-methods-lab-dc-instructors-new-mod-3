class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    console.log(string)
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    function formatWord(word){
      return (exceptions.includes(word) ? word : word.charAt(0).toUpperCase()+word.slice(1))
    }
    let arr = string.split(" ")
    return this.capitalize(arr[0])+" "+arr.slice(1).map(formatWord).join(" ")
  }
}
