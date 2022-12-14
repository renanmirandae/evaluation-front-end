import styles from "./ErrorLogin.module.css";
import { useState, useEffect } from "react";

export function ErrorLogin()
{
    return(
        <p className={styles.errorMessage}>Por favor verifique suas informações e tente novamente</p>
    );
}