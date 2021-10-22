const linksSocialMedia = {
  github: 'MGRafael',
  youtube: 'UCAJJBXBpmJsCquk5SGS1pvg',
  instagram: 'rafael_m.g_',
  facebook: 'batera22',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function gatGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url //avatar image github
      userName.textContent = data.name //user name github
      userLogin.textContent = data.login //login github
      userLink.href = data.html_url //url link github
      userBio.textContent = data.bio //bio github
    })
}

gatGitHubProfileInfos()
