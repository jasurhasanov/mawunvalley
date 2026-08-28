import academySource from '../content/tea-academy/academies.json'

export const academies = academySource.academies.map((academy) => ({
  ...academy,
  why: `${academy.title} matters because the Tea Academy has to produce real Mawun Valley habits, records, and service decisions instead of loose study notes.`,
  questions: [
    `What does ${academy.title} need Jasur to notice?`,
    'What changes in the cup, the guest experience, or the farm system?',
    'What should be recorded so this lesson is useful later?'
  ],
  missions: academy.outputs.slice(0, 3).map((output) => `Create ${output.toLowerCase()}.`),
  related: academy.tools,
  nextAction: `Start with ${academy.outputs[0].toLowerCase()} and connect it to ${academy.tools[0]}.`
}))

export const toolPages = [
  { name: 'Tea Journal', path: '/tea-academy/journal', summary: 'Daily tasting notes, guest notes, ceremony reflections, and field notes.', sections: ['Daily cup note', 'Service note', 'Field note', 'Monthly reflection'] },
  { name: 'Tea Passport', path: '/tea-academy/passport', summary: 'A record of teas by origin, vendor, category, date opened, status, and reorder decision.', sections: ['Tea identity', 'Origin and vendor', 'Storage status', 'Reorder decision'] },
  { name: 'Tea Lab', path: '/tea-academy/lab', summary: 'Brewing experiments, blend tests, cold brew trials, service tests, and outcomes.', sections: ['Hypothesis', 'Variables', 'Result', 'Decision'] },
  { name: 'Tea Garden', path: '/tea-academy/garden', summary: 'Plants, herbs, local botanicals, garden-to-cup ideas, and care rhythm.', sections: ['Plant record', 'Care rhythm', 'Harvest note', 'Service use'] },
  { name: 'Tea House', path: '/tea-academy/house', summary: 'Storage, service station, tool inventory, checklists, and maintenance rhythm.', sections: ['Tool inventory', 'Storage map', 'Station setup', 'Maintenance'] },
  { name: 'Templates', path: '/tea-academy/templates', summary: 'Mission sheets, labels, tasting cards, checklists, and review forms.', sections: ['Mission sheet', 'Tea label', 'Tasting card', 'Monthly review'] }
]

export const supportingSections = [
  'Signature ceremony library',
  "Noni's tea service integration",
  'Mawun Valley tea garden plan',
  'Guest-facing tea story',
  'Internal staff scripts',
  'Storage labels and tasting cards',
  'Monthly review dashboard',
  'Procurement and vendor shortlist',
  'Seasonal tea calendar'
]

export const ranks = [
  { name: 'Seed', summary: 'Start the habit and basic language.' },
  { name: 'Keeper', summary: 'Build reliable practice, storage, service, and care.' },
  { name: 'Host', summary: 'Serve guests with confidence and restraint.' },
  { name: 'Maker', summary: 'Experiment, blend, document, and improve.' },
  { name: 'Steward', summary: "Connect tea to Mawun Valley's land, culture, archive, and long-term identity." }
]

export const findAcademy = (slug) => academies.find((academy) => academy.slug === slug)
