import React, { useReducer, useEffect } from "react";
import LanguageContext from "./language.context";
import languageReducer, { initialState } from "./language.reducer";
import { IntlProvider } from "react-intl";
import { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";
import { InjectRTL } from "styled/global.style";

const LanguageProvider = ({ children, messages }) => {
  const [state, dispatch] = useReducer(languageReducer, initialState);
  const toggleLanguage = (lang) => {
    dispatch({ type: "CURRENT_LANGUAGE", payload: lang });
    localStorage.setItem("lang", lang);
  };
  useEffect(() => {
    const localLang = localStorage.getItem("lang");
    if (localLang) {
      toggleLanguage(localLang);
    } else {
      const langFromNavigator = navigator.language.split("-")[0];
      // const currentLang = langFromNavigator || state.lang || "en";
      const currentLang = "en";

      toggleLanguage(currentLang);
    }
  }, []);

  let isRtl = state.lang === "ar" || state.lang === "he" ? true : false;

  return (
    <LanguageContext.Provider value={{ state, toggleLanguage, dispatch }}>
      <IntlProvider locale={state.lang} messages={messages[state.lang]}>
        <InjectRTL
          lang={state.lang}
          dir={state.lang === "ar" || state.lang === "he" ? "rtl" : "ltr"}
        >
          {isRtl ? (
            <StyleSheetManager stylisPlugins={[rtlPlugin]}>
              {children}
            </StyleSheetManager>
          ) : (
            children
          )}
        </InjectRTL>
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
