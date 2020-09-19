const simpleStrg = artifacts.require("simpleStrg");

contract("simpleStrg",() =>{
    it("should set the data",async ()=>{
        const SimpleStrg = await simpleStrg.deployed();
        await SimpleStrg.setName("Ajay");
        const result = await SimpleStrg.getName();
        assert(result == "Ajay");
    });

});

