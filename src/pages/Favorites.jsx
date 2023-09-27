import { useContext } from 'react';
import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);
  const content =
    favoriteCtx.totalFavorites === 0 ? (
      <p>No favorite detected! Add favorites to see here</p>
    ) : (
      <MeetupList meetups={favoriteCtx.favorites}></MeetupList>
    );
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
