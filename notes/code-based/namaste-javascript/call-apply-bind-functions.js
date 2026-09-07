let nameObject = {
    firstName: 'Sujay',
    lastName: 'R Patil',
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

nameObject.printFullName()