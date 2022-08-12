export const create_profile = (profile)=>{
    const div_profile = document.createElement('div')
    div_profile.classList.add('profile')
    
    div_profile.innerHTML = `
    <div class="profile__img">
        <img src="${profile.avatar_url}" alt="">
    </div>

    <div class="profile__user-description">
        <strong>${profile.name??profile.login}</strong>
        <p >${profile.bio ??''}</p>
    </div>

    <div class="profile__user-info">
        <div>
            <span>${profile.followers}</span>
            <strong>Followers</strong>
        </div>
        <div>
            <span>${profile.following}</span>
            <strong>Following</strong>
        </div>
        <div>
            <span>${profile.public_repos}</span>
            <strong>Public Repositores</strong>
        </div>
    </div>
    <button class="go-btt">
        <a target="_blank" href="${profile.html_url}">
            Go to profile 
            <i class="fa-solid fa-paper-plane"></i>
        </a>
    </button>
    `
    return div_profile
}
