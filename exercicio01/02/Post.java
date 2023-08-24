enum Status {
    DRAFT,
    PUBLISHED,
    DELETED
}

public class Post {
    private int id;
    private String text;
    private Status status;

    Post(int id, String text, Status status) {
        this.setId(id);
        this.setText(text);
        this.setStatus(status);
    }

    public void publish() {
        this.setStatus(Status.PUBLISHED);
    }

	public String getText() {
		return text;
	}


	public void setText(String text) {
		this.text = text;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

    public void publish() {
        validate();
        
        this.setStatus(Status.PUBLISHED);
    }

    public void validate() {
        if (this.getStatus() != Status.DRAFT) {
            throw new RuntimeException("A post must have at least one character");
        }

        if (this.getText().trim().length() == 0) {
            throw new RuntimeException("Only drafts can be posted");
        }
    }
}