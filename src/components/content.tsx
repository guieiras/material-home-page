import React from 'react';

import CMSContent from '../interfaces';

const CMSContext = React.createContext<CMSContent>(null);
function useCMS() {
  return React.useContext(CMSContext);
}

interface ProviderProps {
  content: CMSContent;
  children: React.ReactNode;
}

function CMSProvider({ content, children }: ProviderProps): JSX.Element {
  return <CMSContext.Provider value={content}>{children}</CMSContext.Provider>;
}

export { CMSProvider, useCMS };
