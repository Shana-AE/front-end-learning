interface LabelledValue {
  label: string;
}

function printLabel (labelledObject: LabelledValue) {
  console.log(labelledObject.label)
}

let myObj = {size: 10, label: 'Size 10 Object.'}

printLabel(myObj);