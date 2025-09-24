export const reports = [
  {
    id: 1,
    patientId: 1,
    patientName: "John Smith",
    nurseId: 1,
    nurseName: "Emily Rodriguez",
    date: "2024-01-15",
    time: "10:30 AM",
    observations: "Patient arrived for routine cleaning. No complaints of pain or sensitivity. Oral hygiene appears good with minimal plaque buildup.",
    vitals: {
      bloodPressure: "120/80",
      temperature: "98.6°F",
      pulse: "72 bpm"
    },
    procedures: ["Dental cleaning", "Fluoride treatment", "Oral examination"],
    findings: "Overall oral health is excellent. Small amount of tartar on lower molars removed during cleaning.",
    recommendations: "Continue current oral hygiene routine. Schedule next cleaning in 6 months.",
    status: "Approved",
    doctorFeedback: "Excellent work. Patient can continue regular maintenance schedule.",
    priority: "Low"
  },
  {
    id: 2,
    patientId: 2,
    patientName: "Maria Garcia",
    nurseId: 2,
    nurseName: "Michael Chen",
    date: "2024-01-10",
    time: "2:15 PM",
    observations: "Patient reports severe pain in upper right molar. Sensitivity to hot and cold. Pain level 7/10.",
    vitals: {
      bloodPressure: "130/85",
      temperature: "99.1°F",
      pulse: "78 bpm"
    },
    procedures: ["Digital X-ray", "Percussion test", "Cold sensitivity test"],
    findings: "Deep cavity detected in tooth #3. Possible pulp involvement. Root canal therapy recommended.",
    recommendations: "Schedule urgent root canal treatment. Prescribe pain medication for immediate relief.",
    status: "Pending Review",
    doctorFeedback: "",
    priority: "High"
  },
  {
    id: 3,
    patientId: 3,
    patientName: "David Lee",
    nurseId: 3,
    nurseName: "Lisa Thompson",
    date: "2024-01-08",
    time: "11:00 AM",
    observations: "Pre-surgical consultation for dental implant. Patient is anxious but ready to proceed. Healing from previous extraction is complete.",
    vitals: {
      bloodPressure: "125/82",
      temperature: "98.4°F",
      pulse: "70 bpm"
    },
    procedures: ["3D imaging", "Implant site measurement", "Pre-surgical assessment"],
    findings: "Adequate bone density for implant placement. Site #14 fully healed and ready for implant surgery.",
    recommendations: "Schedule implant surgery. Provide pre-operative instructions and antibiotic prophylaxis.",
    status: "Approved",
    doctorFeedback: "Patient cleared for implant surgery. Schedule for next available slot.",
    priority: "Medium"
  },
  {
    id: 4,
    patientId: 4,
    patientName: "Sarah Johnson",
    nurseId: 4,
    nurseName: "James Wilson",
    date: "2024-01-12",
    time: "4:30 PM",
    observations: "Monthly orthodontic adjustment. Patient compliant with treatment. No broken brackets or loose wires.",
    vitals: {
      bloodPressure: "110/70",
      temperature: "98.2°F",
      pulse: "68 bpm"
    },
    procedures: ["Bracket inspection", "Wire adjustment", "Progress photos"],
    findings: "Good progress in tooth movement. Upper arch alignment improving significantly. No complications.",
    recommendations: "Continue current treatment plan. Schedule next adjustment in 4 weeks.",
    status: "Approved",
    doctorFeedback: "Excellent progress. Treatment on track for completion in 6 months.",
    priority: "Low"
  }
];