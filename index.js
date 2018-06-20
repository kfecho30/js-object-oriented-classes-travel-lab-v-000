class Driver {
  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(date){
    let endDate = new Date(date)
    return endDate.getTime() - this.startDate.getTime();
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  }
}
