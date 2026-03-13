export const suburbs: string[] = [
  'Parramatta', 'Blacktown', 'Liverpool', 'Penrith', 'Campbelltown',
  'Bankstown', 'Hurstville', 'Chatswood', 'Hornsby', 'Manly',
  'Bondi', 'Newtown', 'Surry Hills', 'Glebe', 'Leichhardt',
  'Balmain', 'Rozelle', 'Marrickville', 'Strathfield', 'Burwood',
  'Auburn', 'Merrylands', 'Granville', 'Fairfield', 'Cabramatta',
  'Lakemba', 'Kogarah', 'Rockdale', 'Cronulla', 'Miranda',
  'Sutherland', 'Engadine', 'Caringbah', 'Gymea', 'Menai',
  'Revesby', 'Padstow', 'Panania', 'Punchbowl', 'Wiley Park',
  'Greenacre', 'Condell Park', 'Bass Hill', 'Chester Hill', 'Villawood',
  'Wetherill Park', 'Smithfield', 'Canley Vale', 'Canley Heights', 'Hinchinbrook',
  'Green Valley', 'Miller', 'Moorebank', 'Hammondville', 'Holsworthy',
  'Wattle Grove', 'Prestons', 'Lurnea', 'Casula', 'Glenfield',
  'Macquarie Fields', 'Ingleburn', 'Minto', 'Blairmount', 'Bow Bowing',
  'Raby', 'Eagle Vale', 'Airds', 'Bradbury', 'Rosemeadow',
  'Blair Athol', 'Narellan', 'Smeaton Grange', 'Currans Hill', 'Mount Annan',
  'Harrington Park', 'Spring Farm', 'Cobbitty', 'Rossmore', 'Kemps Creek',
  'Orchard Hills', 'Claremont Meadows', 'Kingswood', 'St Marys', 'Werrington',
  'Colyton', 'Mount Druitt', 'Rooty Hill', 'Bidwill', 'Hebersham',
  'Emerton', 'Lethbridge Park', 'Tregear', 'Shalvey', 'Whalan',
  'Minchinbury', 'Huntingwood', 'Eastern Creek', 'Arndell Park', 'Kings Park',
  'Lalor Park', 'Seven Hills', 'Toongabbie', 'Old Toongabbie', 'Girraween',
  'Pendle Hill', 'Wentworthville', 'Westmead', 'Northmead', 'North Parramatta',
  'Harris Park', 'Rosehill', 'Merrylands West', 'Greystanes', 'Pemulwuy',
  'Woodville', 'Guildford', 'Yennora', 'Leightonfield', 'South Granville',
  'Clyde', 'Camellia', 'Rydalmere', 'Dundas', 'Telopea',
  'Dundas Valley', 'Ermington', 'Meadowbank', 'Rhodes', 'Concord West',
  'North Strathfield', 'Homebush', 'Homebush West', 'Flemington', 'Lidcombe',
  'Berala', 'Regents Park', 'Sefton', 'Birrong', 'Potts Hill',
  'Yagoona', 'Chullora', 'Belmore', 'Campsie', 'Canterbury',
  'Earlwood', 'Bexley', 'Bexley North', 'Arncliffe', 'Turrella',
  'Wolli Creek', 'Bardwell Park', 'Bardwell Valley', 'Kingsgrove', 'Beverly Hills',
  'Narwee', 'Penshurst', 'Mortdale', 'Oatley', 'Como',
  'Jannali', 'Oyster Bay', 'Bonnet Bay', 'Woronora', 'Heathcote',
  'Waterfall', 'Helensburgh', 'Stanwell Park', 'Austinmer', 'Thirroul',
  'Bulli', 'Woonona', 'Bellambi', 'Corrimal', 'Towradgi',
  'Fairy Meadow', 'North Wollongong', 'Wollongong', 'Ryde', 'West Ryde',
  'Eastwood', 'Epping', 'Carlingford', 'Marsfield', 'North Ryde',
  'Macquarie Park', 'Lane Cove', 'Artarmon', 'Willoughby', 'Naremburn',
  'Crows Nest', 'St Leonards', 'Wollstonecraft', 'Waverton', 'McMahons Point',
  'Lavender Bay', 'Milsons Point', 'Kirribilli', 'Neutral Bay', 'Cremorne',
  'Mosman', 'Spit Junction', 'Balmoral', 'Seaforth', 'Manly Vale',
  'Brookvale', 'Dee Why', 'Collaroy', 'Narrabeen', 'Mona Vale',
  'Warriewood', 'Ingleside', 'Terrey Hills', 'Davidson', 'Frenchs Forest',
  'Belrose', 'Killarney Heights', 'Forestville', 'Lindfield', 'Killara',
  'Gordon', 'Pymble', 'Turramurra', 'Wahroonga', 'Warrawee',
  'Asquith', 'Mount Colah', 'Mount Kuring-Gai', 'Berowra', 'Berowra Heights',
  'Berowra Waters', 'Cowan', 'Maroubra', 'Coogee', 'Clovelly',
  'Bronte', 'Tamarama', 'Bondi Beach', 'Bondi Junction', 'Woollahra',
  'Paddington', 'Darlinghurst', 'Kings Cross', 'Potts Point', 'Elizabeth Bay',
  'Rushcutters Bay', 'Edgecliff', 'Double Bay', 'Rose Bay', 'Vaucluse',
  'Watsons Bay', 'Dover Heights', 'Bellevue Hill', 'Randwick', 'Kensington',
  'Kingsford', 'Mascot', 'Rosebery', 'Zetland', 'Waterloo',
  'Redfern', 'Alexandria', 'Beaconsfield', 'Erskineville', 'St Peters',
  'Sydenham', 'Tempe', 'Banksia', 'Brighton-Le-Sands', 'Monterey',
  'Ramsgate', 'Sans Souci', 'Dolls Point', 'Sandringham', 'Taren Point',
  'Gymea Bay', 'Port Hacking', 'Bundeena', 'Maianbar',
]

// Deduplicate and sort
export const uniqueSuburbs: string[] = Array.from(new Set(suburbs)).sort()

export function suburbToSlug(suburb: string): string {
  return suburb
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/'/g, '')
    .replace(/[^a-z0-9-]/g, '')
}

export function slugToSuburb(slug: string): string | undefined {
  return uniqueSuburbs.find(
    (s) => suburbToSlug(s) === slug
  )
}

// Group suburbs by region for nav dropdown
export const suburbRegions: Record<string, string[]> = {
  'Inner West': ['Newtown', 'Glebe', 'Leichhardt', 'Balmain', 'Rozelle', 'Marrickville', 'Strathfield', 'Burwood'],
  'Eastern Suburbs': ['Bondi', 'Bondi Beach', 'Bondi Junction', 'Randwick', 'Coogee', 'Maroubra', 'Paddington', 'Surry Hills'],
  'North Shore': ['Chatswood', 'Hornsby', 'Neutral Bay', 'Mosman', 'Cremorne', 'Crows Nest', 'St Leonards'],
  'Northern Beaches': ['Manly', 'Dee Why', 'Collaroy', 'Narrabeen', 'Mona Vale', 'Brookvale', 'Manly Vale'],
  'Western Sydney': ['Parramatta', 'Blacktown', 'Penrith', 'Liverpool', 'Auburn', 'Merrylands', 'Granville'],
  'South Sydney': ['Hurstville', 'Kogarah', 'Rockdale', 'Cronulla', 'Miranda', 'Sutherland', 'Bankstown'],
  'South West': ['Campbelltown', 'Fairfield', 'Cabramatta', 'Narellan', 'Ingleburn', 'Macquarie Fields'],
}
