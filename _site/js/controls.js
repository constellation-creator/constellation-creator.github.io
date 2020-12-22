const element = document.querySelector('.constellations')
const PARAMS = {
  particleColor: { r: 160, g: 0, b:176 },
  lineColor: { r: 255, g: 255, b: 255 },
  background:{ r: 255, g: 255, b: 255 },
  particleAmount: 400,
  defaultRadius: 1.5,
  variantRadius: 3,
  linkRadius: 150
}

const pane = new Tweakpane()
const f1 = pane.addFolder({title: 'Constellation Creator'})
const f2 = pane.addFolder({title: 'Click for Links About Me'})
f2.expanded = false

f1.addInput(PARAMS, 'particleColor', {label: 'Star Color'}).on(
  'change',
  value => {
    const {r, g, b} = value
    const color = `rgb(${r},${g},${b})`
    element.style.setProperty('--constellations-particleColor', color)
  }
)
f1.addInput(PARAMS, 'lineColor', {label: 'Line Color'}).on('change', value => {
  const {r, g, b2} = value
  const color = `rgb(${r},${g},${b2})`
  element.style.setProperty('--constellations-lineColor', color)
}
)


f1.addInput(PARAMS, 'particleAmount', {
  label: 'Stars',
  step: 5,
  min: 10,
  max: 400
}).on('change', value => {
  element.style.setProperty('--constellations-particleAmount', value)
})
f1.addInput(PARAMS, 'defaultRadius', {
  label: 'Star Size',
  step: 0.5,
  min: 1,
  max: 5
}).on('change', value => {
  element.style.setProperty('--constellations-defaultRadius', value)
})
f1.addInput(PARAMS, 'variantRadius', {
  label: 'Star Radius',
  step: 0.5,
  min: 1,
  max: 4
}).on('change', value => {
  element.style.setProperty('--constellations-variantRadius', value)
})
f1.addInput(PARAMS, 'linkRadius', {
  label: 'Line Amount',
  step: 1,
  min: 10,
  max: 200
}).on('change', value => {
  element.style.setProperty('--constellations-linkRadius', value)
})


f2.addButton({title: 'My Web Page'}).on('click', () =>
  window.open(
    'https://github.com/CSSHoudini/css-houdini'
   
  )
)
f2.addButton({title: 'My LinkedIn'}).on('click', () =>
  window.open('https://www.linkedin.com/in/dani-dolan/')
)
