

module{
    public type Member = {
        name: Text;
        avatar: ?Blob;
        birthdate: ?Nat; //DDMMAAA
        admissionDate: Int; //Timestamp in secconds
        country: ?Text;
        //account: Account;
        sex: Text;
    };

    public type SignUpErrors = {
        #CallerAnnonymous;
        #IsAlreadyAMember;
        #InBlackList;
    };
}