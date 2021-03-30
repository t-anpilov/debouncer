const debounce = (func: Function, timeDelay: number) => {
  let timeout: number
  
  return (event: Event) => {
    const later = () => {
      func(event);
    }
  
    clearTimeout(timeout);
    timeout = setTimeout(later, timeDelay);
  }
}

function input($event: KeyboardEvent) {
  let elem = $event.target as HTMLInputElement
  if (elem) {
    console.log(`value: ${elem.value}`)
  }
}

const debounceForInput = debounce(input, 250)

const textField: HTMLElement | null = document.getElementById('textField')
if (textField) {
  textField.addEventListener('input', debounceForInput)
}