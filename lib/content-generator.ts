import { uniqueSuburbs, suburbToSlug } from './suburbs'

// Rotate through templates based on suburb index to avoid duplicate content
function getTemplateIndex(suburb: string, count: number): number {
  let hash = 0
  for (let i = 0; i < suburb.length; i++) {
    hash = (hash * 31 + suburb.charCodeAt(i)) % count
  }
  return hash
}

export function generateIntroParagraph(suburb: string): string {
  const idx = getTemplateIndex(suburb, 6)
  const templates = [
    `Finding the right dentist in ${suburb} doesn't have to be stressful. Whether you're new to the area or simply looking for a better dental experience, ${suburb} has a range of qualified dental professionals ready to help you and your family. A good local dentist offers convenience — shorter travel times, easier appointment scheduling, and the peace of mind that comes with familiar, accessible care. When choosing a dentist in ${suburb}, look for practices offering a full range of services from routine check-ups to cosmetic treatments. Prioritise clinics that welcome all ages, offer flexible appointment times, and communicate treatment options clearly. Don't wait until a toothache strikes — regular dental visits every six months can prevent costly problems down the track and keep your smile healthy for life.`,

    `Living in ${suburb} means you have access to quality dental care close to home. Choosing a local dentist in ${suburb} offers real advantages — you won't spend hours commuting for a routine check-up, and in an emergency you can get seen quickly. Quality dental care starts with finding a practice that listens to your needs and explains your treatment options without pressure. Residents of ${suburb} benefit from a range of dental services right in their neighbourhood, from preventive care and cosmetic treatments to orthodontics and dental implants. For families in ${suburb}, finding a dentist who sees patients of all ages under one roof is particularly valuable. We connect ${suburb} residents with trusted local providers who deliver professional, caring dental experiences every visit.`,

    `Great dental health starts with finding the right provider, and ${suburb} residents have strong local options to consider. Whether you need a routine clean, teeth whitening, emergency treatment, or something more complex like implants or Invisalign, finding a dentist in ${suburb} who can handle your full range of needs is the ideal approach. Look for practices in ${suburb} with experienced, qualified dentists, modern equipment, and a welcoming environment — especially if you have dental anxiety. Preventive care is the foundation of long-term oral health, so committing to regular six-monthly visits with a trusted ${suburb} dentist will save you money and discomfort in the long run. We make finding and booking with a local ${suburb} dental provider simple and straightforward.`,

    `${suburb} is home to a growing community that deserves convenient, high-quality dental care. Whether it's a routine check-up, a cosmetic treatment, or urgent dental attention, finding a reliable dentist in ${suburb} is easier than you might think. When evaluating dental practices in ${suburb}, consider factors like the range of services offered, the qualifications of the dental team, and how the practice communicates with patients. The best dentists in ${suburb} take time to explain procedures, create personalised treatment plans, and ensure every patient feels comfortable throughout their visit. For families, it's also worth finding a ${suburb} practice that caters to children — making dental visits a positive experience from a young age sets the foundation for lifelong oral health.`,

    `Your oral health is an investment in your overall wellbeing, and finding a great dentist in ${suburb} is the first step. ${suburb} residents have access to dental professionals offering everything from general preventive care through to advanced cosmetic and restorative treatments. When searching for a dentist in ${suburb}, look beyond just location — consider the range of services available, the experience of the team, and whether the practice suits your family's needs. Regular dental check-ups every six months are the cornerstone of good oral health, helping to catch small issues before they become major (and expensive) problems. Whether you're after a simple clean and check-up or a complete smile transformation, we can connect you with a qualified dental provider in the ${suburb} area.`,

    `Choosing the right dentist is one of the best decisions you can make for your long-term health. For ${suburb} residents, having access to quality dental care nearby means you're more likely to attend regular appointments, respond quickly to dental emergencies, and maintain consistent oral health over time. The best dental practices in ${suburb} offer a warm, professional environment where patients of all ages feel welcome. From young children experiencing their first dental visit to adults seeking cosmetic improvements or restorative treatment, a great ${suburb} dentist caters to the full spectrum of dental needs. We take the guesswork out of finding quality dental care in ${suburb} — simply reach out and we'll connect you with a local provider that fits your needs.`,
  ]
  return templates[idx]
}

export function generateWhyLocalSection(suburb: string): string {
  const idx = getTemplateIndex(suburb, 4)
  const templates = [
    `Seeing a dentist close to home in ${suburb} has practical advantages that go beyond convenience. When your dental clinic is nearby, you're more likely to keep regular appointments and less likely to put off treatment when something feels wrong. Local dentists in ${suburb} often build long-term relationships with their patients, giving them a deeper understanding of your dental history and personal preferences. In a dental emergency, being able to reach your dentist in ${suburb} quickly can make a significant difference. Local practices also tend to be well-integrated into the community, with reputations built on genuine patient outcomes and word-of-mouth referrals.`,

    `There are real benefits to choosing a dentist right here in ${suburb}. Shorter travel times mean less disruption to your day, and the familiarity of seeing a local provider regularly builds trust over time. When your dentist knows your dental history in ${suburb}, they can spot changes early and provide more personalised care. Family practices in ${suburb} that see multiple generations of the same household develop a thorough understanding of hereditary dental factors too. In urgent situations, having a go-to dentist in ${suburb} means you get help faster — no scrambling to find an emergency provider you've never met.`,

    `Choosing a dentist local to ${suburb} supports both your health and the community. You'll benefit from easier scheduling, faster emergency access, and the trust that develops through an ongoing patient-provider relationship. A local dentist in ${suburb} is invested in delivering excellent outcomes, because their reputation depends on it. Whether you're managing a dental condition over time or simply maintaining preventive care, continuity of care in ${suburb} ensures your dentist is always working from a complete picture of your oral health history.`,

    `The convenience of local dental care in ${suburb} is hard to beat. Regular appointments are easier to keep when your dentist is close to where you live or work, and emergency situations can be addressed far more quickly. Beyond logistics, there's real value in building an ongoing relationship with a ${suburb} dentist who understands your dental history, preferences, and concerns. This continuity translates to better personalised care and more proactive treatment decisions — catching potential issues earlier and giving you more options before problems escalate.`,
  ]
  return templates[idx]
}

export interface FAQ {
  question: string
  answer: string
}

export function generateFAQs(suburb: string): FAQ[] {
  const idx = getTemplateIndex(suburb, 3)

  const findGoodDentistAnswers = [
    `Start by asking friends, family, or colleagues in ${suburb} for personal recommendations. You can also check online reviews and look for practices with experienced, qualified dentists offering a broad range of services. When you find a ${suburb} dentist you're considering, call to ask about their approach to patient care, appointment availability, and any services you specifically need. We can also connect you directly with a trusted local provider.`,
    `Word of mouth is a great starting point — ask people you trust in ${suburb} who they see and whether they'd recommend their dentist. Beyond that, look for practices with positive Google reviews, clear communication about services and fees, and qualified practitioners with appropriate credentials. A great ${suburb} dentist will welcome new patients, explain treatment options clearly, and never pressure you into unnecessary work.`,
    `Finding a quality dentist in ${suburb} comes down to a few key factors: look for experienced practitioners, a welcoming environment, transparent communication about treatment and costs, and a broad range of services. Reading patient reviews for ${suburb} dental practices is a helpful starting point. If you have specific needs — like children's dentistry, cosmetic treatments, or dental anxiety support — make sure to ask about these upfront.`,
  ]

  const bulkBillingAnswers = [
    `Some dental practices in ${suburb} do offer bulk billing for patients with a valid Medicare card, particularly for children under the Child Dental Benefits Schedule (CDBS), which provides up to $1,000 in covered dental services over two years. For adults, full bulk billing is less common but some ${suburb} providers may offer reduced fees or payment plans. It's always worth calling ahead to ask about your specific situation.`,
    `Bulk billing availability varies between dental practices in ${suburb}. Children may be eligible for subsidised care under the Child Dental Benefits Schedule (CDBS) — a government program covering up to $1,000 in dental treatments over two years. For adults without private health insurance, some ${suburb} dentists offer flexible payment plans or sliding scale fees. Contact us to be matched with a local provider who can discuss your options.`,
    `In ${suburb}, bulk billing for dental care is most commonly available for children under Medicare's Child Dental Benefits Schedule (CDBS), which covers basic treatments up to $1,000 per two-year period. Adult bulk billing is rare in private practice, but some clinics may offer payment plans to make treatment more affordable. We recommend asking any ${suburb} dental provider upfront about their fee structure and whether they process health fund rebates.`,
  ]

  const emergencyAnswers = [
    `In a dental emergency in ${suburb} — such as a severe toothache, broken tooth, knocked-out tooth, or swollen jaw — contact a local dental practice as soon as possible and explain your situation. Most dental practices in ${suburb} keep emergency appointment slots for urgent cases. If you cannot reach your regular dentist, look for a walk-in or after-hours emergency dental service nearby. For severe swelling or difficulty breathing, go to your nearest hospital emergency department.`,
    `Dental emergencies in ${suburb} should be addressed immediately. For a knocked-out tooth, handle it by the crown (not the root), keep it moist, and get to a dentist within an hour if possible. For severe pain, swelling, or a cracked tooth, call a ${suburb} dental practice right away — most will triage emergency calls and fit you in urgently. If you experience facial swelling or fever alongside dental pain, seek medical attention promptly as it may indicate infection.`,
    `If you're facing a dental emergency in ${suburb} — whether it's an excruciating toothache, a lost filling, a broken tooth, or an abscess — don't wait. Call a ${suburb} dental practice immediately and describe your symptoms. Experienced dental teams prioritise emergencies and will advise you on next steps or arrange an urgent appointment. For after-hours emergencies, some ${suburb} area practices offer emergency contact lines. We can help connect you with a provider who handles urgent dental needs.`,
  ]

  const howOftenAnswers = [
    `For most people, visiting the dentist every six months is the recommended standard. This allows for regular professional cleans, early detection of cavities, gum disease, or other issues, and periodic X-rays when needed. Some patients in ${suburb} with higher risk factors — such as those prone to gum disease, dry mouth, or ongoing dental treatment — may need more frequent visits. Your dentist will advise the right schedule for your individual needs.`,
    `The general recommendation is a dental check-up and professional clean every six months. However, your ideal frequency depends on your oral health. Some ${suburb} patients with excellent oral hygiene and low risk may visit annually, while others dealing with gum disease, active cavities, or orthodontic treatment may need to attend every three to four months. Your local dentist in ${suburb} will assess your situation and recommend the most appropriate schedule.`,
  ]

  const childrenAnswers = [
    `Yes — many dental practices in ${suburb} are set up to welcome children and make dental visits a positive experience from an early age. Family-friendly ${suburb} dentists have experience with nervous young patients and know how to explain procedures in age-appropriate ways. The Australian Dental Association recommends a child's first dental visit around 12 months or when their first tooth appears. Starting early in ${suburb} builds good habits and helps prevent dental anxiety in later life.`,
    `Absolutely. Family dental practices in ${suburb} regularly see patients from toddlers through to seniors. Bringing children to the dentist early — ideally from around 12 months — helps normalise the experience and sets them up for a lifetime of good oral health. ${suburb} dentists who specialise in family care know how to keep children calm and comfortable, and they'll advise parents on brushing techniques, diet, and fluoride for different age groups.`,
  ]

  const cosmeticAnswers = [
    `${suburb} dental practices typically offer a full range of cosmetic treatments, including professional teeth whitening, porcelain veneers, composite bonding, Invisalign and clear aligner orthodontics, tooth-coloured fillings, and dental implants. If you're interested in improving your smile, a cosmetic consultation with a ${suburb} dentist is the best starting point — they'll assess your teeth, discuss your goals, and recommend the most appropriate treatments for your situation and budget.`,
    `You'll find a broad range of cosmetic dentistry options through practices serving ${suburb}. Popular treatments include professional teeth whitening (both in-chair and take-home), porcelain or composite veneers, clear aligner orthodontics like Invisalign, smile makeovers, and gum contouring. For missing teeth, dental implants offer a long-lasting cosmetic and functional solution. Book a cosmetic consultation with a local ${suburb} dentist to explore what's possible for your smile.`,
    `Cosmetic dental treatments available in the ${suburb} area include teeth whitening, porcelain veneers, composite bonding, Invisalign, dental implants, and complete smile makeovers. The right treatment for you depends on your goals, current dental health, and budget. A qualified cosmetic dentist in ${suburb} will take the time to understand what you're hoping to achieve and present a personalised treatment plan that fits your circumstances.`,
  ]

  return [
    {
      question: `How do I find a good dentist in ${suburb}?`,
      answer: findGoodDentistAnswers[idx % findGoodDentistAnswers.length],
    },
    {
      question: `Do dentists in ${suburb} offer bulk billing?`,
      answer: bulkBillingAnswers[idx % bulkBillingAnswers.length],
    },
    {
      question: `What should I do in a dental emergency in ${suburb}?`,
      answer: emergencyAnswers[idx % emergencyAnswers.length],
    },
    {
      question: `How often should I visit the dentist?`,
      answer: howOftenAnswers[idx % howOftenAnswers.length],
    },
    {
      question: `Are there dentists in ${suburb} that see children?`,
      answer: childrenAnswers[idx % childrenAnswers.length],
    },
    {
      question: `What cosmetic dental treatments are available in ${suburb}?`,
      answer: cosmeticAnswers[idx % cosmeticAnswers.length],
    },
  ]
}

export function getNearbySuburbs(suburb: string, count = 6): string[] {
  const allSuburbs = uniqueSuburbs.filter((s) => s !== suburb)
  // Use hash to pick "nearby" suburbs — deterministic but varied per suburb
  const startIdx = getTemplateIndex(suburb, allSuburbs.length)
  const nearby: string[] = []
  for (let i = 0; i < count; i++) {
    nearby.push(allSuburbs[(startIdx + i * 7) % allSuburbs.length])
  }
  return nearby
}

export function generateMetaDescription(suburb: string): string {
  const idx = getTemplateIndex(suburb, 5)
  const templates = [
    `Find a trusted dentist in ${suburb}. Book general check-ups, teeth whitening, emergency dental & more. Connect with local ${suburb} dental providers today.`,
    `Looking for a dentist in ${suburb}? We connect ${suburb} residents with qualified local dentists offering full-service care for the whole family. Enquire now.`,
    `Dentist in ${suburb} — find local dental care for check-ups, cosmetic treatments, children's dentistry & emergencies. Get matched with a ${suburb} provider.`,
    `Need a dentist near ${suburb}? Discover trusted local dental services including general, cosmetic & emergency dentistry. Connect with a ${suburb} dentist today.`,
    `${suburb} dentist finder — connect with experienced local dentists offering check-ups, whitening, Invisalign & emergency care. Family-friendly practices in ${suburb}.`,
  ]
  // Truncate to 155 chars
  const desc = templates[idx]
  return desc.length > 155 ? desc.substring(0, 152) + '...' : desc
}
