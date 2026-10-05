import { Database, Brain, Footprints, Watch, CircleDot, HeartPulse, Activity, Dumbbell, Radio, User, Users, Building2 } from 'lucide-react'
export const nav = [
  { to: '/platform', label: 'Platform' }, { to: '/solutions', label: 'Solutions' }, { to: '/devices', label: 'Devices' },
  { to: '/ai', label: 'AI' }, { to: '/insights', label: 'Insights' }, { to: '/about', label: 'About' }]
export const platform = [
  { n: '01', title: 'Collect', icon: Database, text: 'Bring in data from smart devices and connected health sources.' },
  { n: '02', title: 'Understand', icon: Activity, text: 'Niva organizes and interprets the information in one place.' },
  { n: '03', title: 'Personalize', icon: Brain, text: 'AI is designed to find patterns and create personal insights.' },
  { n: '04', title: 'Act', icon: Footprints, text: 'Practical suggestions on nutrition, exercise, activity, recovery and habits.' }]
export const devices = [
  { name: 'Smart Ring', icon: CircleDot, desc: 'Discreet, always-on wearable.', data: 'Sleep, heart rate, activity', use: 'Understand recovery and sleep routines.' },
  { name: 'Smart Watch', icon: Watch, desc: 'Everyday tracking on the wrist.', data: 'Steps, heart rate, workouts', use: 'Connect daily movement to personal goals.' },
  { name: 'Blood Pressure Monitor', icon: Activity, desc: 'Home measurement devices.', data: 'Blood pressure readings', use: 'Show trends over time for review with a professional.' },
  { name: 'Heart-rate Sensors', icon: HeartPulse, desc: 'Chest and arm sensors.', data: 'Heart rate, intensity', use: 'Shape exercise intensity guidance.' },
  { name: 'Fitness Equipment', icon: Dumbbell, desc: 'Connected gym and home equipment.', data: 'Sessions, duration, effort', use: 'Bring training into the same picture.' },
  { name: 'Connected Health Sensors', icon: Radio, desc: 'Future sensors and health sources.', data: 'Varies by device', use: 'Expand the ecosystem over time.' }]
export const flow = ['Devices', 'Health data', 'Niva Intelligence', 'Pattern detection', 'Personalized insights', 'Recommended actions']
export const aiPoints = ['Understand individual patterns', 'Combine information from different sources', 'Identify behavioural changes', 'Personalize recommendations', 'Support healthier daily decisions']
export const personal = ['Activity', 'Exercise', 'Nutrition', 'Sleep', 'Recovery', 'Wearable data', 'Daily habits', 'Individual goals']
export const nutrition = ['Indian meals', 'Family eating patterns', 'Daily routines', 'Social occasions', 'Activity levels', 'Individual goals']
export const solutions = [
  { title: 'For Individuals', icon: User, text: 'A single place to see your data and receive personalized, practical daily guidance.' },
  { title: 'For Health & Fitness Professionals', icon: Users, text: 'A clearer view of client habits and progress to support better conversations.' },
  { title: 'For Organizations', icon: Building2, text: 'A connected platform that can support wellness programs at scale.' }]
export const steps = [['Connect', 'Connect smart devices and health information.'], ['Collect', 'Bring relevant data into one ecosystem.'], ['Understand', 'AI analyses patterns and changes.'], ['Personalize', 'Generate individual insights.'], ['Act', 'Turn insights into practical daily actions.']]
export const why = [['Connected', 'Devices and data in one place.'], ['Personalized', 'Guidance built around you, not averages.'], ['Data-informed', 'Suggestions grounded in your own patterns.'], ['Adaptive', 'Recommendations that change as you do.'], ['Simple', 'Clear language and calm design.']]
export const insights = [
  { slug: 'ai-and-health', tag: 'AI & Health', title: 'How AI can support everyday health decisions', excerpt: 'A look at where intelligent tools can help, and where people still lead.' },
  { slug: 'wearable-technology', tag: 'Wearable Technology', title: 'What wearable data can and cannot tell you', excerpt: 'Making sense of the numbers from rings, watches and sensors.' },
  { slug: 'nutrition', tag: 'Nutrition', title: 'Why generic diet plans fall short', excerpt: 'Food is cultural, social and personal.' },
  { slug: 'fitness', tag: 'Fitness', title: 'Building a movement routine that lasts', excerpt: 'Consistency beats intensity for most people.' },
  { slug: 'behaviour', tag: 'Behaviour', title: 'Small habits, steady change', excerpt: 'How daily behaviour shapes long-term wellbeing.' },
  { slug: 'health-data', tag: 'Health Data', title: 'Bringing scattered health data together', excerpt: 'Why one connected view matters.' }]
export const dash: Record<string, { stats: [string, string, string][]; insight: string }> = {
  Overview: { stats: [['Activity', '7,842 steps', '+12% this week'], ['Sleep', '7h 42m', 'Consistent'], ['Recovery', 'Good', 'Ready to train'], ['Heart rate', '72 bpm', 'Resting']], insight: 'Your activity has increased this week. Consider maintaining your current movement routine.' },
  Nutrition: { stats: [['Meals logged', '3 of 3', 'Today'], ['Protein', 'On track', 'Veg-friendly options'], ['Hydration', '1.8 L', 'Goal 2.5 L'], ['Dinner timing', '8:30 pm', 'Slightly late']], insight: 'An earlier, lighter dinner on busy days may help your evening routine.' },
  Activity: { stats: [['Steps', '7,842', 'Goal 9,000'], ['Active time', '46 min', 'Today'], ['Workouts', '3', 'This week'], ['Streak', '5 days', 'Moving daily']], insight: 'A short evening walk could help you reach today\u2019s goal.' },
  Sleep: { stats: [['Total sleep', '7h 42m', 'Last night'], ['Deep sleep', '1h 38m', 'Typical'], ['Bedtime', '11:05 pm', 'Consistent'], ['Wake-ups', '1', 'Low']], insight: 'A steady bedtime this week may be supporting your recovery.' },
  Recovery: { stats: [['Readiness', 'Good', 'Today'], ['Sleep', '7h 42m', 'Last night'], ['Resting HR', '62 bpm', 'Stable'], ['Stress', 'Low', 'Calm day']], insight: 'Recovery looks steady. A moderate session today fits well.' }}
export const footer = {
  Platform: [['Overview', '/platform'], ['Dashboard', '/platform'], ['How it works', '/platform']],
  Solutions: [['Individuals', '/solutions'], ['Professionals', '/solutions'], ['Organizations', '/solutions']],
  Technology: [['Devices', '/devices'], ['AI', '/ai']],
  Insights: [['All articles', '/insights']],
  Company: [['About', '/about'], ['Contact', '/contact'], ['Privacy', '/privacy'], ['Terms', '/terms']]} as Record<string, string[][]>
