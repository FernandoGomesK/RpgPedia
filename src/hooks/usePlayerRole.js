import { useState, useEffect } from "react";
import OBR from "@owlbear-rodeo/sdk";

export function usePlayerRole() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    let unsubscribe;
    OBR.onReady(() => {
      OBR.player.getRole().then(setRole);
      unsubscribe = OBR.player.onChange((player) => setRole(player.role));
    });
    return () => unsubscribe?.();
  }, []);

  return role;
}