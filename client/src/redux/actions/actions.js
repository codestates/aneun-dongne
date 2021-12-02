export const IS_LOGIN = 'IS_LOGIN';
export const IS_LOADING = 'IS_LOADING';
export const IS_SHOW_LOGIN_MODAL = "IS_SHOW_LOGIN_MODAL";
export const IS_SHOW_SIGNUP_MODAL = "IS_SHOW_SIGNUP_MODAL";
export const CHANGE_ADD = "CHANGE_ADD"
export const IS_SHOW_ROOM_OUT_MODAL = "IS_SHOW_ROOM_OUT_MODAL";
export const IS_SHOW_ROOM_IN_MODAL = "IS_SHOW_ROOM_IN_MODAL";
export const IS_SHOW_ROOM_INFO_CHANGE_MODAL = "IS_SHOW_ROOM_INFO_CHANGE_MODAL";
export const IS_SHOW_OAUTH = "IS_SHOW_OAUTH";
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const CHANGE_CITY = "CHANGE_CITY";
export const CHANGE_REGION = "CHANGE_REGION";
export const CHANGE_LAT = 'CHANGE_LAT';
export const CHANGE_LON = 'CHANGE_LON';
export const IS_SHOW_CREATE_ROOM_MODAL = "IS_SHOW_CREATE_ROOM_MODAL";
export const IS_SHOW_IS_SIGNUP_MODAL = "IS_SHOW_IS_SIGNUP_MODAL";
export const CURRENT_ID = "CURRENT_ID";
export const IS_LOGIN_ALERT ="IS_LOGIN_ALERT";
export const MEETING_PLACE_HANDLER = "MEETING_PLACE_HANDLER";
export const CURRENT_USER_LIST_HANDLER = "CURRENT_USER_LIST_HANDLER";

export function isLoginHandler (boolean) {
    return {
        type : IS_LOGIN,
        payload : {
            isLogin : boolean
        }
    }
};
export function isLoadingHandler (boolean) {
    return {
        type : IS_LOADING,
        payload : {
            isLoading : boolean
        }
    }
}
export function isShowLoginModalHandler (boolean) {
    return {
        type : IS_SHOW_LOGIN_MODAL,
        payload : {
            isShowLoginModal : boolean
        }
    }
};
export function isShowSignUpModalHandler (boolean) {
    return {
        type : IS_SHOW_SIGNUP_MODAL,
        payload : {
            isShowSignUpModal : boolean
        }
    }
};

export function isShowRoomOutModalHandler (boolean) {
    return {
        type : IS_SHOW_ROOM_OUT_MODAL,
        payload : {
            isShowRoomOutModal : boolean
        }
    }
};
export function isShowRoomInModalHandler (boolean) {
    return {
        type : IS_SHOW_ROOM_IN_MODAL,
        payload : {
            isShowRoomInModal : boolean
        }
    }
};
export function isShowRoomInfoChangeModalHandler (boolean) {
    return {
        type : IS_SHOW_ROOM_INFO_CHANGE_MODAL,
        payload : {
            isShowRoomInfoChangeModal : boolean
        }
    }
};
export function isShowCreateRoomModalHandler (boolean) {
    return {
        type : IS_SHOW_CREATE_ROOM_MODAL,
        payload : {
            isShowCreateRoomModal : boolean
        }
    }
}
export function isShowOauthHandler (boolean) {
    return {
        type : IS_SHOW_OAUTH,
        payload : {
            isShowOauth : boolean
        }
    }
};
export function setAccessToken(accessToken) {
    return {
        type : ACCESS_TOKEN,
        payload: {
            accessToken: accessToken
        }
    }
}
export function changeRegion (region) {
    return {
        type : CHANGE_REGION,
        payload : {
            region
        }
    }
};
export function changeCity (city) {
    return {
        type : CHANGE_CITY,
        payload : {
            city
        }
    }
}
export function changeAddress (add) {
    return {
        type : CHANGE_ADD,
        payload : {
            add
        }
    }
}

export function changeLat(lat){
    return {
        type : CHANGE_LAT,
        payload : {
            lat
        }
    }
}
export function changeLon(lon){
    return {
        type : CHANGE_LON,
        payload : {
            lon
        }
    }
}
//
export function isShowIsSignUpModalHandler (boolean) {
    return {
        type : IS_SHOW_IS_SIGNUP_MODAL,
        payload : {
            isShowIsSignUpModal : boolean
        }
    }
};
export function isLoginAlertHandler (boolean) {
    return {
        type : IS_LOGIN_ALERT,
        payload : {
            isLoginAlert : boolean
        }
    }
};
export function isCurrentId (id) {
    return {
        type : CURRENT_ID,
        payload : {
            isCurrentIdHandler : id
        }
    }
};
export function meetingPlaceHandler (obj) {
    return {
        type : MEETING_PLACE_HANDLER,
        payload : obj
    }
}
export function isCurrentUserListHandler (arr) {
    return {
        type: CURRENT_USER_LIST_HANDLER,
        payload: arr
    }
}