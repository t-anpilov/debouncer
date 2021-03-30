const debounce = (func: Function, timeDelay: number) => {
  let timeout: number
  
  return (event: any) => {
    const later = () => {
      func(event);
    }
  
    clearTimeout(timeout);
    timeout = setTimeout(later, timeDelay);
  }
}

function input($event: any) {
  let elem: HTMLInputElement = $event.target
  console.log(`value: ${elem.value}`)
}

const debounceForInput = debounce(input, 200)

const textField: HTMLElement = document.getElementById('textField')
textField.addEventListener('input', debounceForInput)