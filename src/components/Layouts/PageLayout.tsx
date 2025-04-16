import React, { type FC, type ReactNode } from "react";
import styles from "./layout.module.css";

interface Props {
  children: ReactNode;
}

export const PageLayout: FC<Props> = ({ children }) => (
  <div className={styles.wrapper}>
    <main className={styles.main}>{children}</main>
  </div>
);
