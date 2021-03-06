export class User {
    _id: string;
    ID: number;
    UserName: string;
    UserID: string;
    Password: string;
    EmailAddress: string;
    FirstName: string;
    MiddleInitial: string;
    LastName: string;
    Roles: Array<string>;
    HomeAddress1: string;
    HomeAddress2: string;
    OtherHomeAddress: string;
    HomeCity: string;
    HomeState: string;
    HomePostalCode: string;
    HomeCountry: string;
    OfficeAddress1: string;
    OfficeAddress2: string;
    OtherOfficeAddress: string;
    OfficeCity: string;
    OfficeState: string;
    OfficePostalCode: string;
    OfficeCountry: string;
    Birthday: Date;
    MobilePhoneNumber: string;
    HomePhoneNumber: string;
    OtherHomePhoneNumber: string;
    HomeFaxNumber: string;
    OfficePhoneNumber: string;
    OtherOfficePhoneNumber: string;
    OfficeFaxNumber: string;
    AlternatePhone: string; 
    AssistantFullName: string; 
    AssistantPhoneNumber: string; 
    ManagerFullName: string; 
    ManagerPhoneNumber: string; 
    LinkedInAddress: string; 
    FacebookAddress: string; 
    TwitterAddress: string; 
    SocialMediaAddress: string; 
    WebsiteAddress: string; 
    Occupation: string; 
    JobTitle: string; 
    CompanyName: string; 
    DepartmentName: string; 
    UserDescription: string; 
    IsOnline: boolean; 
    UserSetting: string; 
    UserToken: string; 
    OpenIDProvider: string; 
    OpenID: string; 
    MobileAlias: string; 
    PasswordSalt: string; 
    MobilePin: string; 
    PasswordQuestion: string; 
    PasswordAnswer: string;
    LastLockoutDate: Date;
    IsAnonymous: boolean;    
    LastActivityDate: string;
    IsApproved: boolean;    
    IsLockedOut: boolean;    
    LastLoginDate: string;
    LastLogoutDate: string;
    LastPasswordChangedDate: string;
    FailedPasswordAttemptCount: number;    
    FailedPasswordAttemptWindowStart: string;
    FailedPasswordAnswerAttemptCount: number;    
    FailedPasswordAnswerAttemptWindowStart: string;
    AcceptPrivacyPolicy: boolean;    
    AcceptServiceTerm: boolean;    
    AcceptEmailContact: boolean;    
    WebsiteID: number;    
    StatusID:number;    
    CreateDate: string;
    CreateUserID: number;    
    ModifyDate: string;    
    ModifyUserID: number;    
    JoinReason: string;    
    JoinReasonNote: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
}
