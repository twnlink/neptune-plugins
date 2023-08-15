import { intercept } from "@neptune";
import { refreshUserSession } from "@neptune/actions/session";

export const onUnload = intercept("user/LOAD_USER_SUCCESS", ([user]) => {
  // I don't think this does anything, but it's fun.
  user.meta.earlyAccessProgram = true;
    
  user.subscription = {
    ...user.subscription,
    status: "ACTIVE",
    subscription: {
      type: "PREMIUM_PLUS",
      offlineGracePeriod: 30,
    },
    premiumAccess: true,
    canGetTrial: false,
    paymentType: "PARENT",
  };
});

// Forcibly refresh the session just to ensure the subscription gets updated.
// refreshUserSession({ shouldReload: false })
