let stateArray = [
["2976149","Mississippi","28"],
["6137428","Missouri","29"],
["1068778","Montana","30"],
["1934408","Nebraska","31"],
["3080156","Nevada","32"],
["1359711","New Hampshire","33"],
["8882190","New Jersey","34"],
["2096829","New Mexico","35"],
["19453561","New York","36"],
["10488084","North Carolina","37"],
["762062","North Dakota","38"],
["11689100","Ohio","39"],
["3956971","Oklahoma","40"],
["4217737","Oregon","41"],
["12801989","Pennsylvania","42"],
["1059361","Rhode Island","44"],
["5148714","South Carolina","45"],
["884659","South Dakota","46"],
["6829174","Tennessee","47"],
["28995881","Texas","48"],
["623989","Vermont","50"],
["3205958","Utah","49"],
["8535519","Virginia","51"],
["7614893","Washington","53"],
["1792147","West Virginia","54"],
["5822434","Wisconsin","55"],
["578759","Wyoming","56"],
["3193694","Puerto Rico","72"],
["4903185","Alabama","01"],
["731545","Alaska","02"],
["7278717","Arizona","04"],
["3017804","Arkansas","05"],
["39512223","California","06"],
["5758736","Colorado","08"],
["973764","Delaware","10"],
["705749","District of Columbia","11"],
["3565287","Connecticut","09"],
["21477737","Florida","12"],
["10617423","Georgia","13"],
["1787065","Idaho","16"],
["1415872","Hawaii","15"],
["12671821","Illinois","17"],
["6732219","Indiana","18"],
["3155070","Iowa","19"],
["2913314","Kansas","20"],
["4467673","Kentucky","21"],
["4648794","Louisiana","22"],
["1344212","Maine","23"],
["6045680","Maryland","24"],
["6892503","Massachusetts","25"],
["9986857","Michigan","26"],
["5639632","Minnesota","27"]]
const States = () => {
let stateObject = {}
console.log(stateArray)
stateArray.map(state => {
    console.log(state)
    if (state){
        stateObject[state[1].toUpperCase()] = {"Population":state[0],"Index":state[2]}
    }

})
    return stateObject

    
}
export default States