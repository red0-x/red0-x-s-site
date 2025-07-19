export default function constHandler() {

    //const here
    const cD: {red0xx:string, github:string, discord:string, rev: any, email:string} = {
        red0xx: "@red0xx",
        github: "https://github.com/red0-x",
        discord: "https://discord.com/users/666121487584854026",
        rev: [0o7, 19, 25],
        email: "Coming soon!"
    };

    let mh = cD.rev[0]
    let dy = cD.rev[1]
    let yr = cD.rev[2]
    console.log(`@red0xx | rev ${mh}/${dy}/20${yr}`);

    return(cD)

};

