// Person constructor
function Person(name, dob){
  this.name = name
  this.birthday = new Date(dob)
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

const peter = new Person('Peter', '6-26-1990')
console.log(peter.calculateAge())