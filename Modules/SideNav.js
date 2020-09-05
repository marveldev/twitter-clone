const SideNav = () => {
  return `
    <nav class="left-side-nav">
      <a href="#" id="logo">
        <i class='fab fa-twitter'></i>
      </a>
      <a href="#"><i class="glyphicon glyphicon-home"></i>Home</a>
      <a href="#"><i class='fas fa-hashtag'></i>Explore</a>
      <a href="#"><i class='fas fa-bell'></i>Notifications</a>
      <a href="#"><i class="fa fa-envelope-o"></i>Messages</a>
      <a href="#"><i class="fa fa-bookmark-o"></i>Bookmarks</a>
      <a href="#"><i class="fa fa-list-alt"></i>Lists</a>
      <a href="#"><i class='fas fa-user-alt'></i>Profile</a>
      <a href="#" id="dropdown-button"><i class="fa fa-caret-down"></i>More</a>
      <div class="dropdown-content">
        <a href="#"><i class='fab fa-rocketchat'></i>Topics</a>
        <a href="#"><i class="fa fa-bolt"></i>Moments</a>
        <a href="#"><i class="fa fa-external-link-square"></i>Twitter Ads</a>
        <a href="#"><i class="fa fa-bar-chart"></i>Analytics</a>
        <a href="#"><i class="material-icons">&#xe8b8;</i>Settings and privacy</a>
        <a href="#"><i class="fa fa-question-circle-o"></i>Help Center</a>
        <a href="#" id="modal-button"><i class="material-icons">&#xe3ae;</i>Display</a>
      </div>
      <button>Tweet</button>
      <a href="#">
        <img src="https://images.pexels.com/photos/3921857/pexels-photo-3921857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="nav-image" alt="my profile picture">
        <span>Marvelwonders</span>
      </a>
    </nav>
  `
}
export default SideNav;