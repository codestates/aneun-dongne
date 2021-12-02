export const initialState = {
    isLogin : {
        isLogin : false
    },
    isLoading : {
        isLoading : true
    },
    isShowLoginModal: {
        isShowLoginModal : false
    },
    isShowSignUpModal: {
        isShowSignUpModal: false
    },
    isShowRoomOutModal: {
        isShowRoomOutModal: false
    },
    isShowRoomInModal: {
        isShowRoomInModal: false
    },
    isShowRoomInfoChangeModal: {
        isShowRoomInfoChangeModal: false
    },
    isShowCreateRoomModal: {
        isShowCreateRoomModal : false
    },
    isShowOauth: {
        isShowOauth: true
    },
    accessToken: {
        accessToken: ''
    },
    location : {
        add : '',
        region : '',
        city : '',
        lat:0,
        lon:0,
        meetingAdd :''
    },
    isShowIsSignUpModal : {
        isShowIsSignUpModal: false
    },
    isLoginAlert : {
        isLoginAlert: false
    },
    isCurrentIdHandler:{
        isCurrentIdHandler: ''
    },
    meetingPlace : {meetRegion:'',meetCity:'',meetAdd:''},
    currentUserList: []
    

}