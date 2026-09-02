//Question 1: Value Detective

function describeValue(a){
    return (`${typeof(a)} | ${a?"truthy":"falsy"}`)
}

// console.log(describeValue("hello"))
// console.log(describeValue(""))
// console.log(describeValue(25))
// console.log(describeValue(0))
// console.log(describeValue(true))
// console.log(describeValue(null))
// console.log(describeValue(undefined))
// console.log(describeValue(NaN))

//Question 2: Bangladesh Weekend Machine

function getDayType(dayName){
    dayName = dayName.toLowerCase()
    
    switch(dayName){
        case "friday":
            return "Weekend"
        case "saturday":
            return "Weekend"
        case "sunday":
            return "Working Day"
        case "monday":
            return "Working Day"
        case "tuesday":
            return "Working Day"
        case "wednesday":
            return "Working Day"
        case "thursday":
            return "Working Day"
        default:
            return "Invalid Day"
    }
}

// console.log(getDayType("FriDay"))
// console.log(getDayType("Saturday"))
// console.log(getDayType("Sunday"))
// console.log(getDayType("Monday"))
// console.log(getDayType("tuesday"))
// console.log(getDayType("wednesday"))
// console.log(getDayType("thursday"))
// console.log(getDayType("Bandamban"))

// Question 3: Username Gatekeeper

function validateUsername(username){
    if(username.length < 4)
        return "Too Short"
    else if(username.includes(" "))
        return "No Space Allowed"
    else if(username.toLowerCase().includes("admin"))
        return "Reserved Word"
    else
        return "Available"
}

// console.log(validateUsername('1111admiN'))

//Question 4: Dhaka CNG Fare Meter:

function getCngFare(distance, isNight=false, waitingMinutes=0){
    let fare = 50
    if(distance>2)
        fare+= (distance-2)*15
    fare += waitingMinutes*2
    if(isNight)
        fare+=(fare/5)
    return fare;
}

// console.log(getCngFare(2))

//Question 5: Run Chase Commentator

function getChaseVerdict(target, score, ballsLeft){

    let runsNeeded = target - score
    let verdict
    
    if(runsNeeded <= 0){
        return "Won"
    }
    else if(ballsLeft<=0){
        return "Lost"
    }
    else{
        let requiredRate = (runsNeeded / ballsLeft) *  6
        if(requiredRate <= 6){
            verdict = "Comfortable"
        }
        else if(requiredRate>6 && requiredRate <=12){
            verdict = "Tough"
        }
        else{
            verdict = "Almost Impossible"
        }
    }

    return(`Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`)

}

// console.log(getChaseVerdict(200,200,10))