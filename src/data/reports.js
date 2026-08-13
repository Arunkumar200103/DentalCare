export const reports = [
  {
    id: 1,
    patientId: 1,
    patientName: "John Smith",
    nurseId: 1,
    nurseName: "Emily Rodriguez",
    date: "2026-08-01",
    time: "10:30 AM",
    observations: "Patient arrived for cognitive behavioral therapy session. Reports stable mood, minor work-related stress but no depressive episodes. Good sleep hygiene.",
    vitals: {
      bloodPressure: "120/80",
      temperature: "98.6°F",
      pulse: "72 bpm"
    },
    procedures: ["Cognitive Behavioral Therapy (CBT)", "Mental State Examination (MSE)", "Progress Review"],
    findings: "Overall psychological status is stable. Good progress with stress management techniques and self-reporting logs.",
    recommendations: "Continue daily mindfulness practice. Schedule next therapy session in 2 weeks.",
    status: "Approved",
    doctorFeedback: "Excellent progress. Patient can continue regular counseling and maintenance schedule.",
    priority: "Low"
  },
  {
    id: 2,
    patientId: 2,
    patientName: "Maria Garcia",
    nurseId: 2,
    nurseName: "Michael Chen",
    date: "2026-08-05",
    time: "2:15 PM",
    observations: "Patient reports severe anxiety symptoms and a panic attack episode last night. High state of distress, difficulty sleeping, palpitations. Anxiety rating 8/10.",
    vitals: {
      bloodPressure: "135/85",
      temperature: "99.1°F",
      pulse: "88 bpm"
    },
    procedures: ["Anxiety Rating Scale (GAD-7)", "Panic Protocol Review", "Crisis Counseling Session"],
    findings: "Acute anxiety exacerbation. Triggers identified as high job demands and irregular evening medication compliance.",
    recommendations: "Schedule urgent doctor review for potential medication adjustment. Focus next therapy sessions on acute panic breathing control.",
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
    date: "2026-07-28",
    time: "11:00 AM",
    observations: "Patient in outpatient de-addiction recovery program. Completed 30 days of sobriety. Experiencing mild cravings but utilizing coping cards effectively.",
    vitals: {
      bloodPressure: "125/82",
      temperature: "98.4°F",
      pulse: "70 bpm"
    },
    procedures: ["Cravings Assessment", "Relapse Prevention Plan Update", "Urine Toxicology Screen"],
    findings: "Toxicology screen negative for all substances. Strong cognitive resolve. Active participation in support group.",
    recommendations: "Continue outpatient group twice weekly. Maintain daily activity structure and sponsor contact.",
    status: "Approved",
    doctorFeedback: "Outstanding sobriety milestone. Keep up the relapse prevention counseling.",
    priority: "Medium"
  },
  {
    id: 4,
    patientId: 4,
    patientName: "Sarah Johnson",
    nurseId: 4,
    nurseName: "James Wilson",
    date: "2026-08-02",
    time: "4:30 PM",
    observations: "Family counseling session with spouse. Improved interpersonal communication reported. Patient compliant with daily medication plan.",
    vitals: {
      bloodPressure: "110/70",
      temperature: "98.2°F",
      pulse: "68 bpm"
    },
    procedures: ["Systemic Family Therapy", "Conflict Resolution Training", "Compliance Monitoring"],
    findings: "Reduced domestic tension. Spouse feels more supported and understands the recovery timeline better.",
    recommendations: "Continue monthly family counseling sessions. Reinforce daily boundary setting guidelines.",
    status: "Approved",
    doctorFeedback: "Excellent family alignment. Re-integrate social support into therapeutic goal checklist.",
    priority: "Low"
  }
];