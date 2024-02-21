(function() {
  var _ = function(element) {
    u = {
      last: function() {
        return element[element.length -1];
      },

      first() {
        return element[0];
      },

      without(...ele) {
        return element.filter(el => {
          return !ele.includes(el)
        })
      },

      lastIndexOf(num) {
        index = -1
        element.forEach((el, ind) => {
          if (el === num) index = ind;
        })
        return index
      },

      sample(arg) {
        let arr = [];
        if (!arg) arg = 1;
        if (this.length === 1) return this[0]
        let originalArr = element.slice()
      
        for (let counter = arg; counter > 0; counter -= 1) {
          let num = originalArr[Math.round(Math.random() * (originalArr.length-1))]
          arr.push(num)
          let deleted = originalArr.indexOf(num)
          originalArr.splice(deleted,1)
        }
        return (arr.length === 1) ? arr[0] : arr
      },
        
      findWhere(objTest) {
        if (!objTest) return undefined
        let ans = element.filter(obj => {
          let arr = Object.keys(objTest);
          return arr.every(key => {
            return obj[key] && obj[key] === objTest[key]
          })
        })
        return ans.length === 0 ? undefined : ans[0]
      },

      where(objTest) {
        if (!objTest) return undefined;
        let ans = element.filter(obj => {
          let arr = Object.keys(objTest);
          let bool = true;
          arr.forEach(key => {
            if (obj[key] === undefined || obj[key] !== objTest[key]) bool = false;
          });
          return bool;
        })
        if (ans.length === 0) return undefined;
        return ans;
      },

      pluck(key) {
        return element.reduce((obj, el) => {
          if( Object.keys(el).includes(key)) obj.push(el[key])
          return obj
        }, [])
      },

      keys(){
        return Object.keys(element);
      },

      values() {
        return Object.values(element);
      },

      pick(...keys) {
        let newObj = {}
        keys.forEach(key => {
          if (element[key]) newObj[key] = element[key]
        })
        return newObj
      },

      omit(...keys) {
        let newObj = {} 
        Object.keys(element).forEach(key => {
          if (!keys.includes(key)) newObj[key] = element[key]
        })
        return newObj
      },

      has(prop) {
        return !!element[prop]
      }
    };

    return u;
  }
  _.extend = function(...args) {
    let firstObj = args.splice(0, 1)[0];
    args.forEach(obj => {
      Object.assign(firstObj, obj);
    })
    return firstObj;
  }

  _.range = function(...nums) {
    let starting;
    let ending;
    if (nums.length === 1) {
      [starting, ending] = [0, nums[0]];
    } else {
      [starting, ending] = [nums[0], nums[1]];
    }
    
    let newArray = [];
    for (let counter = starting; counter < ending; counter += 1) {
      newArray.push(counter);
    }
    return newArray;
  }

  window._ = _;
})();


