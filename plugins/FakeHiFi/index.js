import { intercept } from "@neptune";

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
