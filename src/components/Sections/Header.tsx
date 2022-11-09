
import {FC, memo, useCallback, useMemo} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Resume],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section;
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return null;
});

Header.displayName = 'Header';
export default Header;
