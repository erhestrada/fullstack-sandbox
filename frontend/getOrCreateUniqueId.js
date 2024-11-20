function getOrCreateUniqueId() {
    let id = localStorage.getItem('uniqueId');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('uniqueId', id);
    }
    return id;
  }
  