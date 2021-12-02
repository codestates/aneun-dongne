import { combineReducers } from 'redux';
import { 
  CHANGE_ADD,
  CHANGE_CITY,
  CHANGE_REGION,
    IS_LOGIN, 
    IS_LOADING,
    IS_SHOW_LOGIN_MODAL,
    IS_SHOW_SIGNUP_MODAL,
    IS_SHOW_ROOM_OUT_MODAL,
    IS_SHOW_ROOM_IN_MODAL,
    IS_SHOW_ROOM_INFO_CHANGE_MODAL,
    IS_SHOW_CREATE_ROOM_MODAL,
    IS_SHOW_OAUTH,
    ACCESS_TOKEN,
    CHANGE_LON,
    CHANGE_LAT,
    IS_SHOW_IS_SIGNUP_MODAL,
    CURRENT_ID,
    IS_LOGIN_ALERT,
    MEETING_PLACE_HANDLER,
    CURRENT_USER_LIST_HANDLER

} from '../actions/actions';
import { initialState } from './initialState';


// * rootReducer : 여러 리듀서들을 하나로 합친다. rootReducer는 store에 전달된다.
const rootReducer = combineReducers({
    isLoginReducer,
    isLoadingReducer,
    isShowLoginModalReducer,
    isShowSignUpModalReducer,
    isShowRoomOutModalReducer,
    isShowRoomInModalReducer,
    isShowRoomInfoChangeModalReducer,
    isShowCreateRoomModalReducer,
    isShowOauthReducer,
    accessTokenReducer,
    locationReducer,
    isShowIsSignUpModalReducer,
    isCurrentIdReducer,
    isLoginAlertReducer,
    meetingPlaceReducer,
    currentUserListReducer
})

function isLoginReducer(state = initialState.isLogin, action) {
    switch (action.type) {
        case IS_LOGIN :
            return Object.assign({},{
                isLogin : action.payload.isLogin
            });
        default : return state;
    }
}
function isLoadingReducer(state = initialState.isLoading, action) {
    switch (action.type) {
      case IS_LOADING : 
        return Object.assign({},{
          isLoading : action.payload.isLoading
        });
        default : return state
      }
}

function isShowLoginModalReducer(state = initialState.isShowLoginModal, action){
    switch (action.type) {
        case IS_SHOW_LOGIN_MODAL:
          return Object.assign({}, {
            isShowLoginModal: action.payload.isShowLoginModal
          });
        default: return state;
      }
}

function isShowSignUpModalReducer(state = initialState.isShowSignUpModal, action){
    switch (action.type) {
        case IS_SHOW_SIGNUP_MODAL :
          return Object.assign({}, {
            isShowSignUpModal: action.payload.isShowSignUpModal
          });
        default: return state;
      }
}

function isShowRoomOutModalReducer(state = initialState.isShowRoomOutModal, action){
  switch (action.type) {
      case IS_SHOW_ROOM_OUT_MODAL:
        return Object.assign({}, {
          isShowRoomOutModal: action.payload.isShowRoomOutModal
        });
      default: return state;
    }
}

function isShowRoomInModalReducer(state = initialState.isShowRoomInModal, action){
  switch (action.type) {
      case IS_SHOW_ROOM_IN_MODAL:
        return Object.assign({}, {
          isShowRoomInModal: action.payload.isShowRoomInModal
        });
      default: return state;
    }
}

function isShowRoomInfoChangeModalReducer(state = initialState.isShowRoomInfoChangeModal, action){
  switch (action.type) {
      case IS_SHOW_ROOM_INFO_CHANGE_MODAL:
        return Object.assign({}, {
          isShowRoomInfoChangeModal: action.payload.isShowRoomInfoChangeModal
        });
      default: return state;
    }
  }
    
function isShowCreateRoomModalReducer(state = initialState.isShowCreateRoomModal, action){
  switch (action.type) {
    case IS_SHOW_CREATE_ROOM_MODAL : 
      return Object.assign({}, {
        isShowCreateRoomModal : action.payload.isShowCreateRoomModal
      });
    default: return state;
  }
}

function isShowOauthReducer(state = initialState.isShowOauth, action){
  switch (action.type) {
      case IS_SHOW_OAUTH:
        return Object.assign({}, {
          isShowOauth: action.payload.isShowOauth
        });
      default: return state;
    }
}

function accessTokenReducer(state = initialState.accessToken, action){
  switch (action.type) {
    case ACCESS_TOKEN:
      return Object.assign({}, {
        accessToken: action.payload.accessToken
      });
    default: return state;
  }
}

function locationReducer(state = initialState.location, action){
    switch (action.type) {
        case CHANGE_ADD :
          return {
            ...state,...action.payload
          }
        case CHANGE_REGION :
          return {
            ...state,...action.payload
          }
        case CHANGE_CITY :
          return {
            ...state,...action.payload
          }
        case CHANGE_LAT:
          return {
            ...state,...action.payload
          }
        case CHANGE_LON :
          return {
            ...state,...action.payload
          }
        default : return state;
      }
}

function isShowIsSignUpModalReducer(state = initialState.isShowIsSignUpModal, action){
  switch (action.type) {
      case IS_SHOW_IS_SIGNUP_MODAL :
        return Object.assign({}, {
          isShowIsSignUpModal: action.payload.isShowIsSignUpModal
        });
        default: return state;
    }
}

function isLoginAlertReducer(state = initialState.isLoginAlert, action){
  switch (action.type) {
      case IS_LOGIN_ALERT:
        return Object.assign({}, {
          isLoginAlert: action.payload.isLoginAlert
        });
        default: return state;
    }
}

function isCurrentIdReducer(state = initialState.isCurrentIdHandler, action){
  switch (action.type) {
      case CURRENT_ID :
        return Object.assign({}, {
          isCurrentIdHandler: action.payload.isCurrentIdHandler
        });
        default: return state;
    }
  }
  
  function meetingPlaceReducer(state = initialState.meetingPlace,action){
    switch (action.type) {
      case MEETING_PLACE_HANDLER :
        return {...state,...action.payload}
      default : return state
    }
  }
  function currentUserListReducer(state = initialState.currentUserList, action) {
    switch (action.type) {
      case CURRENT_USER_LIST_HANDLER :
        return [...state, ...action.payload]
      default: return state;
    }
  }

export default rootReducer;