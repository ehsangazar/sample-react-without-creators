
const longPolling = ({
  conditionFucntion = () => {},
  callFunction = () => {},
  errorFunction = () => {},
  interval=1000
}) => {
  const innerFunction = () => {
    try{
      callFunction();
    } catch(e) {
      errorFunction(e)
    }
    
    setTimeout(()=>{
      if (conditionFucntion()){
        return innerFunction()
      }
    }, interval)
  }

  return innerFunction()
}

export default longPolling;