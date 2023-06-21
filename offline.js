if(navigator.onLine){
    console.log("You are now online")
}else{
    console.log("You are offline")
}
const para = document.querySelector("#para")  
const originalText = para.textContent

window.addEventListener("offline" , event => {
    para.textContent = "You are offline. Connect your network to continue"
}) 

window.addEventListener("online" , event => {
    para.textContent = originalText
})

const isCharging = battery => {
    const chargingStatus = battery.charging ? "Yes" : "No" 

    console.log(`Is the Battery Charging ? ${chargingStatus}`)
}

const batteryLevelChange = battery => {
    const batteryLevel = battery.level*100

    console.log(`Battery Level :  ${batteryLevel}%`)
}

const batteryTimeChange = battery => {
    const batteryTime = battery.chargingTime

    console.log(`Battery Charging Time :  ${batteryTime} seconds`)
}

const batteryDischargeTime = battery => {
    const batteryTime = battery.dischargingTime

    console.log(`Battery discharging Time :  ${batteryTime} seconds`)
}

navigator.getBattery().then(battery => {
    console.log(battery)

    battery.addEventListener("chargingchange" , () => isCharging(battery))
    battery.addEventListener("levelchange" , () => batteryLevelChange(battery)) 
    battery.addEventListener("chargingtimechange" , () => batteryTimeChange(battery)) 
    battery.addEventListener("dischargingtimechange" , () => batteryDischargeTime(battery)) 

})

