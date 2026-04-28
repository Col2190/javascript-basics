let onboardings = [
    {status:"ASSIGNED", isActive: true, hasDocuments: true},
    {status: "PENDING", isActive: false, hasDocuments: true},
    {status: "FAILED", isActive: true, hasDocuments: false}
];
for(let i =0; i<onboardings.length; i++) {
    if((onboardings[i].status === "ASSIGNED" || onboardings[i].status === "PENDING") 
        &&  onboardings[i].isActive === true && onboardings[i].hasDocuments === true){
    console.log("Onboarding ready")}
    else {console.log("Onboarding not ready");}
}