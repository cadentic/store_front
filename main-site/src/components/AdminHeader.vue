<template>
  <div class="row header">
    <!-- Profile Info and Notifications -->
    <div class="col-md-2 col-sm-2 col-xs-2">
      <a href="javascript:;" class="search openSearchBox">
        <i class="entypo-search"></i>
      </a>
      <div class="searchBox">
        <form action="#" method="POST">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search for..."
            />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Search</button>
            </span>
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-7 col-sm-8 col-xs-8">
      <div class="welcome_text">
        <h2>Welcome to B2B</h2>
      </div>
    </div>
    <div class="col-md-3 col-sm-2 col-xs-2 clearfix">
      <div class="clearfix pull-right">
        <ul class="user-info pull-left pull-right-xs pull-none-xsm notiMsg">
          <!-- Raw Notifications -->
          <!-- Message Notifications -->
          <li class="notifications dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              data-hover="dropdown"
              data-close-others="true"
            >
              <i class="entypo-mail"></i>
            </a>
          </li>
          <!-- Task Notifications -->
          <li class="notifications dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              data-hover="dropdown"
              data-close-others="true"
            >
              <i class="entypo-bell"></i>
            </a>
          </li>
        </ul>
        <ul class="user-info pull-left pull-none-xsm">
          <!-- Profile Info -->
          <li class="profile-info dropdown">
            <!-- add class "pull-right" if you want to place this from right -->
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img
                src="admin/images/thumb-1@2x.png"
                alt=""
                class="img-circle"
                width="44"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
