graph LR
A[Phone rings] --> B{Answer the call?}
B --> C{Recorded message plays}
C --> D{Press desired option?}
D --> E{Option 1/2: Follow instructions} || F{Option 3: Speak with representative}
E --> End{Issue resolved}
F --> G{Wait for representative}
G --> H{Answered by representative?}
H --> I{Discuss issue & resolve} | | J{Not answered within reasonable time}
J --> K{Try again?}
K --> |Yes| G
K --> |No| L{Leave voicemail (optional)} || End{Issue not resolved}
L --> End{Issue not resolved}
